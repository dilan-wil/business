import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth-context";
import '../../public/assets/frontend/default/css/bootstrap.min.css'
import '../../public/assets/frontend/default/css/fontawesome-pro.css'
import '../../public/assets/frontend/default/css/odometer-default.min.css'
import '../../public/assets/frontend/default/css/swiper.min.css'
import '../../public/assets/frontend/default/css/nice-select.css'
import '../../public/assets/frontend/default/css/select2.min.css'
import '../../public/assets/frontend/default/css/iconsax.css'
import '../../public/assets/frontend/default/css/spacing.css'
import '../../public/assets/frontend/default/css/styles7839.css?v=1.2'
import { Toaster } from "@/components/ui/toaster";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bitcoin Works",
  description: "Minage acceleré et infini de bitcoin",
  icons: {
    icon: "assets/icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Easy, Secure and Best Way to Earn money from the comfort of your home."
        />
        <meta property="og:image" content="1.jpg" />
        <link
          rel="icon"
          href="assets/icon.png"
          type="image/x-icon"
        />

        {/* Page Title */}
        <title>Bitcoin Works</title>

        {/* CSS Stylesheets */}
        {[
          "bootstrap.min.css",
          "fontawesome-pro.css",
          "odometer-default.min.css",
          "swiper.min.css",
          "nice-select.css",
          "select2.min.css",
          "iconsax.css",
          "spacing.css",
          "styles7839.css?v=1.2",
        ].map((file) => (
          <link
            key={file}
            rel="stylesheet"
            href={`assets/frontend/default/css/${file}`}
          />
        ))}

        {/* Inline CSS */}
        <style>
          {`
            .whatsapp-widget, .telegram-widget, .youtube-widget {
              position: fixed;
              right: 20px;
              color: white;
              padding: 10px 20px;
              border-radius: 50px;
              text-align: center;
              cursor: pointer;
              font-family: Arial, sans-serif;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              display: flex;
              align-items: center;
            }
            .whatsapp-widget {
              bottom: 165px;
              background-color: #25D366;
            }
            .telegram-widget {
              bottom: 220px;
              background-color: #0088cc;
            }
            .youtube-widget {
              bottom: 110px;
              background-color: #ff0000;
            }
            .whatsapp-widget img, .telegram-widget img, .youtube-widget img {
              width: 24px;
              height: 24px;
              margin-right: 10px;
            }
          `}
        </style>
      </head>
      <body className="landing-page-bg">
        <AuthProvider>{children}</AuthProvider>
            <Toaster />
        {/* JavaScript */}
        {[
          "jquery-3.7.1.min.js",
          "bootstrap.bundle.min.js",
          "jquery.nice-select.min.js",
          "jquery.appear.min.js",
          "odometer.min.js",
          "swiper.min.js",
          "meanmenu.min.js",
          "landing.js",
          "lucide.min.js",
          "sidebar.js",
          "main.js",
          "custom.js",
          "landingff3e.js?v1.0",
        ].map((file) => (
          <script
            key={file}
            src={`assets/frontend/default/js/${file}`}
          ></script>
        ))}

        {/* Pusher Notification */}
        <script src="https://paytimecash.9r3.site/assets/global/js/pusher.min.js"></script>
        <script>
          {`
            "use strict";

            (function ($) {
              let pusherAppKey = "";
              let pusherAppCluster = "mt1";
              let soundUrl = "https://paytimecash.9r3.site/notification-tune";

              // Initialize Pusher
              var notification = new Pusher(pusherAppKey, {
                encrypted: true,
                cluster: pusherAppCluster,
              });

              var channel = notification.subscribe("user-notification106466");
              channel.bind("notification-event", function (result) {
                playSound();
                latestNotification();
                notifyToast(result);
              });

              function latestNotification() {
                $.get("https://paytimecash.9r3.site/user/latest-notification", function (data) {
                  $(".user-notifications106466").html(data);
                });
              }

              function notifyToast(data) {
                new Notify({
                  status: "info",
                  title: data.data.title,
                  text: data.data.notice,
                  effect: "slide",
                  speed: 300,
                  showIcon: true,
                  showCloseButton: true,
                  autoclose: true,
                  autotimeout: 9000,
                  position: "right bottom",
                  customWrapper: \`<div><a href="\${data.data.action_url}" class="learn-more-link">Explore</a></div>\`,
                });
              }

              function playSound() {
                $.get(soundUrl, function (data) {
                  var audio = new Audio(data);
                  audio.play();
                });
              }
            })(jQuery);
          `}
        </script>

        {/* Theme Switcher */}
        <script>
          {`
            "use strict";
            $(".color-switcher").on("click", function () {
              $("body").toggleClass("dark-theme");
              $.get("https://paytimecash.9r3.site/theme-mode");
            });
          `}
        </script>
      </body>
    </html>
  );
}
