'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/functions/login";
import Loader from "@/components/loader";
import { useToast } from "@/hooks/use-toast";

export default function Page(){

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const [isValid, setIsValid] = useState(false)

    // Real-time validation function
    const validateForm = (name: string, value: string) => {
        const newErrors = { ...errors }

        switch (name) {
            case 'email':
                newErrors.email = /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid.'
                break
            default:
                break
        }

        setErrors(newErrors)
    }

    // Handle field changes and validate in real-time
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => {
            const newFormData = { ...prevData, [name]: value }
            validateForm(name, value)
            return newFormData
        })
    }

    // Check validity whenever formData or errors change
    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(field => field !== '')
        const noErrors = Object.values(errors).every(error => error === '')
        setIsValid(allFieldsFilled && noErrors)
    }, [formData, errors])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const loginSuccessful = await login(formData);
            console.log("Login Successful:", loginSuccessful);
            
            if (loginSuccessful) {
                toast({
                    variant: "success",
                    title: "Connexion Réussi.",
                    description: "Vous serez diriger vers votre pannel.",
                })
                router.push('/dashboard');
            } else {
                console.error("Login failed");
                toast({
                    variant: "destructive",
                    title: "Mauvais email ou mot de passe.",
                    description: "Rassurez vous d'entrer la bonne adresse mail et le bon mot de passe.",
                  })
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast({
                variant: "destructive",
                title: "Mauvais email ou mot de passe.",
                description: "Rassurez vous d'entrer la bonne adresse mail et le bon mot de passe.",
              })
        } finally {
            setLoading(false);
        }
    };
    return(
        <>
            {loading && <Loader />}
            <section className="sign-up-area">
        <div className="auth-wrapper">
            <div className="contents-inner">
                <div className="content">
                    
                    <div className="top-content">
                        <h3 className="title">👋 Se connecter</h3>
                    </div>
                    <div className="auth-form-wrapper">
                        
                        <form onSubmit={handleSubmit}>
                            <div className="single-input has-left-icon">
                                <label className="input-label" >Email Address<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input onChange={handleChange} type="email" className="box-input email-input" name="email" required />
                                    <span className="icon">
                                    <i className="icon-sms"></i>
                                    </span>
                                </div>
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="single-input has-right-icon has-left-icon">
                                <label className="input-label">Password<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input onChange={handleChange} type="password" className="box-input password-input" name="password" required />
                                    <div className="password">
                                        <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                    </div>
                                    <span className="icon">
                                        <i className="icon-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="inputs">
                                <button type="submit" className="site-btn primary-btn w-100">Se connecter</button>
                            </div>
                        </form>
                    </div>
                    <div className="bottom-content">
                        <div className="have-acount">
                            <p>Pas encore de compte ? <Link href="register">s'Inscrire</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <footer>
            <div className="dashboard-footer-area">
                <div className="need-content">
                    <p className="description"><a href="contact.html">Besoin d'aide?</a></p>
                </div>
            </div>
        </footer>
        </>
    )
}