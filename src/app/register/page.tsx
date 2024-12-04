import Link from "next/link";



export default function Page(){
    return(
        <>
            <section className="sign-up-area">
        <div className="auth-wrapper">
            <div className="contents-inner">
                <div className="content">
                    
                    <div className="top-content">
                        <h3 className="title">💪 Créez un compte</h3>
                    </div>
                    <div className="auth-form-wrapper">
                        
                        <form action="https://paytimecash.9r3.site/register" method="POST">
                            <input type="hidden" name="_token" value="uEqEqttfMpe80lQy5fGcPsxJnWHkTkcmrhsJ4zF3" />                            <div className="single-input has-left-icon">
                                <label className="input-label">Prénom<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="text" className="box-input name-input" name="first_name" value="" required />
                                    <span className="icon">
                                        <i className="icon-profile-circle"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="single-input has-left-icon">
                                <label className="input-label">Nom<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="text" className="box-input name-input" name="last_name" value="" required />
                                    <span className="icon">
                                        <i className="icon-profile-circle"></i>
                                    </span>
                                </div>
                            </div>
                                                            <div className="single-input has-left-icon">
                                    <label className="input-label" >Nom d'utilisateur <span className="text-danger">*</span> </label>
                                    <div className="input-field">
                                        <input type="text" className="box-input name-input" name="username" value="" required />
                                        <span className="icon">
                                        <i className="icon-profile-circle"></i>
                                    </span>
                                    </div>
                                </div>
                                                        <div className="single-input has-left-icon">
                                <label className="input-label" >Adresse mail<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="email" className="box-input email-input" name="email" value="" required />
                                    <span className="icon">
                                    <i className="icon-sms"></i>
                                    </span>
                                </div>
                            </div>
                                                            <div className="single-input mb-3">
                                    <label className="input-label" >Country  <span className="text-danger">*</span> </label>
                                    <select name="country" className="box-input w-100" id="countrySelect">
                                                                                    <option  value="Afghanistan:+93" data-code="+93">Afghanistan</option>
                                                                                    <option  value="Aland Islands:+358" data-code="+358">Aland Islands</option>
                                                                                    <option  value="Albania:+355" data-code="+355">Albania</option>
                                                                                    <option  value="Algeria:+213" data-code="+213">Algeria</option>
                                                                                    <option  value="AmericanSamoa:+1684" data-code="+1684">AmericanSamoa</option>
                                                                                    <option  value="Andorra:+376" data-code="+376">Andorra</option>
                                                                                    <option  value="Angola:+244" data-code="+244">Angola</option>
                                                                                    <option  value="Anguilla:+1264" data-code="+1264">Anguilla</option>
                                                                                    <option  value="Antarctica:+672" data-code="+672">Antarctica</option>
                                                                                    <option  value="Antigua and Barbuda:+1268" data-code="+1268">Antigua and Barbuda</option>
                                                                                    <option  value="Argentina:+54" data-code="+54">Argentina</option>
                                                                                    <option  value="Armenia:+374" data-code="+374">Armenia</option>
                                                                                    <option  value="Aruba:+297" data-code="+297">Aruba</option>
                                                                                    <option  value="Australia:+61" data-code="+61">Australia</option>
                                                                                    <option  value="Austria:+43" data-code="+43">Austria</option>
                                                                                    <option  value="Azerbaijan:+994" data-code="+994">Azerbaijan</option>
                                                                                    <option  value="Bahamas:+1242" data-code="+1242">Bahamas</option>
                                                                                    <option  value="Bahrain:+973" data-code="+973">Bahrain</option>
                                                                                    <option  value="Bangladesh:+880" data-code="+880">Bangladesh</option>
                                                                                    <option  value="Barbados:+1246" data-code="+1246">Barbados</option>
                                                                                    <option  value="Belarus:+375" data-code="+375">Belarus</option>
                                                                                    <option  value="Belgium:+32" data-code="+32">Belgium</option>
                                                                                    <option  value="Belize:+501" data-code="+501">Belize</option>
                                                                                    <option  value="Benin:+229" data-code="+229">Benin</option>
                                                                                    <option  value="Bermuda:+1441" data-code="+1441">Bermuda</option>
                                                                                    <option  value="Bhutan:+975" data-code="+975">Bhutan</option>
                                                                                    <option  value="Bolivia, Plurinational State of:+591" data-code="+591">Bolivia, Plurinational State of</option>
                                                                                    <option  value="Bosnia and Herzegovina:+387" data-code="+387">Bosnia and Herzegovina</option>
                                                                                    <option  value="Botswana:+267" data-code="+267">Botswana</option>
                                                                                    <option  value="Brazil:+55" data-code="+55">Brazil</option>
                                                                                    <option  value="British Indian Ocean Territory:+246" data-code="+246">British Indian Ocean Territory</option>
                                                                                    <option  value="Brunei Darussalam:+673" data-code="+673">Brunei Darussalam</option>
                                                                                    <option  value="Bulgaria:+359" data-code="+359">Bulgaria</option>
                                                                                    <option  value="Burkina Faso:+226" data-code="+226">Burkina Faso</option>
                                                                                    <option  value="Burundi:+257" data-code="+257">Burundi</option>
                                                                                    <option  value="Cambodia:+855" data-code="+855">Cambodia</option>
                                                                                    <option selected value="Cameroon:+237" data-code="+237">Cameroon</option>
                                                                                    <option  value="Canada:+1" data-code="+1">Canada</option>
                                                                                    <option  value="Cape Verde:+238" data-code="+238">Cape Verde</option>
                                                                                    <option  value="Cayman Islands:+ 345" data-code="+ 345">Cayman Islands</option>
                                                                                    <option  value="Central African Republic:+236" data-code="+236">Central African Republic</option>
                                                                                    <option  value="Chad:+235" data-code="+235">Chad</option>
                                                                                    <option  value="Chile:+56" data-code="+56">Chile</option>
                                                                                    <option  value="China:+86" data-code="+86">China</option>
                                                                                    <option  value="Christmas Island:+61" data-code="+61">Christmas Island</option>
                                                                                    <option  value="Cocos (Keeling) Islands:+61" data-code="+61">Cocos (Keeling) Islands</option>
                                                                                    <option  value="Colombia:+57" data-code="+57">Colombia</option>
                                                                                    <option  value="Comoros:+269" data-code="+269">Comoros</option>
                                                                                    <option  value="Congo:+242" data-code="+242">Congo</option>
                                                                                    <option  value="The Democratic Republic of the Congo:+243" data-code="+243">The Democratic Republic of the Congo</option>
                                                                                    <option  value="Cook Islands:+682" data-code="+682">Cook Islands</option>
                                                                                    <option  value="Costa Rica:+506" data-code="+506">Costa Rica</option>
                                                                                    <option  value="Cote d&#039;Ivoire:+225" data-code="+225">Cote d&#039;Ivoire</option>
                                                                                    <option  value="Croatia:+385" data-code="+385">Croatia</option>
                                                                                    <option  value="Cuba:+53" data-code="+53">Cuba</option>
                                                                                    <option  value="Cyprus:+357" data-code="+357">Cyprus</option>
                                                                                    <option  value="Czech Republic:+420" data-code="+420">Czech Republic</option>
                                                                                    <option  value="Denmark:+45" data-code="+45">Denmark</option>
                                                                                    <option  value="Djibouti:+253" data-code="+253">Djibouti</option>
                                                                                    <option  value="Dominica:+1767" data-code="+1767">Dominica</option>
                                                                                    <option  value="Dominican Republic:+1849" data-code="+1849">Dominican Republic</option>
                                                                                    <option  value="Ecuador:+593" data-code="+593">Ecuador</option>
                                                                                    <option  value="Egypt:+20" data-code="+20">Egypt</option>
                                                                                    <option  value="El Salvador:+503" data-code="+503">El Salvador</option>
                                                                                    <option  value="Equatorial Guinea:+240" data-code="+240">Equatorial Guinea</option>
                                                                                    <option  value="Eritrea:+291" data-code="+291">Eritrea</option>
                                                                                    <option  value="Estonia:+372" data-code="+372">Estonia</option>
                                                                                    <option  value="Ethiopia:+251" data-code="+251">Ethiopia</option>
                                                                                    <option  value="Falkland Islands (Malvinas):+500" data-code="+500">Falkland Islands (Malvinas)</option>
                                                                                    <option  value="Faroe Islands:+298" data-code="+298">Faroe Islands</option>
                                                                                    <option  value="Fiji:+679" data-code="+679">Fiji</option>
                                                                                    <option  value="Finland:+358" data-code="+358">Finland</option>
                                                                                    <option  value="France:+33" data-code="+33">France</option>
                                                                                    <option  value="French Guiana:+594" data-code="+594">French Guiana</option>
                                                                                    <option  value="French Polynesia:+689" data-code="+689">French Polynesia</option>
                                                                                    <option  value="Gabon:+241" data-code="+241">Gabon</option>
                                                                                    <option  value="Gambia:+220" data-code="+220">Gambia</option>
                                                                                    <option  value="Georgia:+995" data-code="+995">Georgia</option>
                                                                                    <option  value="Germany:+49" data-code="+49">Germany</option>
                                                                                    <option  value="Ghana:+233" data-code="+233">Ghana</option>
                                                                                    <option  value="Gibraltar:+350" data-code="+350">Gibraltar</option>
                                                                                    <option  value="Greece:+30" data-code="+30">Greece</option>
                                                                                    <option  value="Greenland:+299" data-code="+299">Greenland</option>
                                                                                    <option  value="Grenada:+1473" data-code="+1473">Grenada</option>
                                                                                    <option  value="Guadeloupe:+590" data-code="+590">Guadeloupe</option>
                                                                                    <option  value="Guam:+1671" data-code="+1671">Guam</option>
                                                                                    <option  value="Guatemala:+502" data-code="+502">Guatemala</option>
                                                                                    <option  value="Guernsey:+44" data-code="+44">Guernsey</option>
                                                                                    <option  value="Guinea:+224" data-code="+224">Guinea</option>
                                                                                    <option  value="Guinea-Bissau:+245" data-code="+245">Guinea-Bissau</option>
                                                                                    <option  value="Guyana:+595" data-code="+595">Guyana</option>
                                                                                    <option  value="Haiti:+509" data-code="+509">Haiti</option>
                                                                                    <option  value="Holy See (Vatican City State):+379" data-code="+379">Holy See (Vatican City State)</option>
                                                                                    <option  value="Honduras:+504" data-code="+504">Honduras</option>
                                                                                    <option  value="Hong Kong:+852" data-code="+852">Hong Kong</option>
                                                                                    <option  value="Hungary:+36" data-code="+36">Hungary</option>
                                                                                    <option  value="Iceland:+354" data-code="+354">Iceland</option>
                                                                                    <option  value="India:+91" data-code="+91">India</option>
                                                                                    <option  value="Indonesia:+62" data-code="+62">Indonesia</option>
                                                                                    <option  value="Islamic Republic of Persian Gulf:+98" data-code="+98">Islamic Republic of Persian Gulf</option>
                                                                                    <option  value="Iraq:+964" data-code="+964">Iraq</option>
                                                                                    <option  value="Ireland:+353" data-code="+353">Ireland</option>
                                                                                    <option  value="Isle of Man:+44" data-code="+44">Isle of Man</option>
                                                                                    <option  value="Israel:+972" data-code="+972">Israel</option>
                                                                                    <option  value="Italy:+39" data-code="+39">Italy</option>
                                                                                    <option  value="Jamaica:+1876" data-code="+1876">Jamaica</option>
                                                                                    <option  value="Japan:+81" data-code="+81">Japan</option>
                                                                                    <option  value="Jersey:+44" data-code="+44">Jersey</option>
                                                                                    <option  value="Jordan:+962" data-code="+962">Jordan</option>
                                                                                    <option  value="Kazakhstan:+77" data-code="+77">Kazakhstan</option>
                                                                                    <option  value="Kenya:+254" data-code="+254">Kenya</option>
                                                                                    <option  value="Kiribati:+686" data-code="+686">Kiribati</option>
                                                                                    <option  value="Democratic People&#039;s Republic of Korea:+850" data-code="+850">Democratic People&#039;s Republic of Korea</option>
                                                                                    <option  value="Republic of South Korea:+82" data-code="+82">Republic of South Korea</option>
                                                                                    <option  value="Kuwait:+965" data-code="+965">Kuwait</option>
                                                                                    <option  value="Kyrgyzstan:+996" data-code="+996">Kyrgyzstan</option>
                                                                                    <option  value="Laos:+856" data-code="+856">Laos</option>
                                                                                    <option  value="Latvia:+371" data-code="+371">Latvia</option>
                                                                                    <option  value="Lebanon:+961" data-code="+961">Lebanon</option>
                                                                                    <option  value="Lesotho:+266" data-code="+266">Lesotho</option>
                                                                                    <option  value="Liberia:+231" data-code="+231">Liberia</option>
                                                                                    <option  value="Libyan Arab Jamahiriya:+218" data-code="+218">Libyan Arab Jamahiriya</option>
                                                                                    <option  value="Liechtenstein:+423" data-code="+423">Liechtenstein</option>
                                                                                    <option  value="Lithuania:+370" data-code="+370">Lithuania</option>
                                                                                    <option  value="Luxembourg:+352" data-code="+352">Luxembourg</option>
                                                                                    <option  value="Macao:+853" data-code="+853">Macao</option>
                                                                                    <option  value="Macedonia:+389" data-code="+389">Macedonia</option>
                                                                                    <option  value="Madagascar:+261" data-code="+261">Madagascar</option>
                                                                                    <option  value="Malawi:+265" data-code="+265">Malawi</option>
                                                                                    <option  value="Malaysia:+60" data-code="+60">Malaysia</option>
                                                                                    <option  value="Maldives:+960" data-code="+960">Maldives</option>
                                                                                    <option  value="Mali:+223" data-code="+223">Mali</option>
                                                                                    <option  value="Malta:+356" data-code="+356">Malta</option>
                                                                                    <option  value="Marshall Islands:+692" data-code="+692">Marshall Islands</option>
                                                                                    <option  value="Martinique:+596" data-code="+596">Martinique</option>
                                                                                    <option  value="Mauritania:+222" data-code="+222">Mauritania</option>
                                                                                    <option  value="Mauritius:+230" data-code="+230">Mauritius</option>
                                                                                    <option  value="Mayotte:+262" data-code="+262">Mayotte</option>
                                                                                    <option  value="Mexico:+52" data-code="+52">Mexico</option>
                                                                                    <option  value="Federated States of Micronesia:+691" data-code="+691">Federated States of Micronesia</option>
                                                                                    <option  value="Moldova:+373" data-code="+373">Moldova</option>
                                                                                    <option  value="Monaco:+377" data-code="+377">Monaco</option>
                                                                                    <option  value="Mongolia:+976" data-code="+976">Mongolia</option>
                                                                                    <option  value="Montenegro:+382" data-code="+382">Montenegro</option>
                                                                                    <option  value="Montserrat:+1664" data-code="+1664">Montserrat</option>
                                                                                    <option  value="Morocco:+212" data-code="+212">Morocco</option>
                                                                                    <option  value="Mozambique:+258" data-code="+258">Mozambique</option>
                                                                                    <option  value="Myanmar:+95" data-code="+95">Myanmar</option>
                                                                                    <option  value="Namibia:+264" data-code="+264">Namibia</option>
                                                                                    <option  value="Nauru:+674" data-code="+674">Nauru</option>
                                                                                    <option  value="Nepal:+977" data-code="+977">Nepal</option>
                                                                                    <option  value="Netherlands:+31" data-code="+31">Netherlands</option>
                                                                                    <option  value="New Caledonia:+687" data-code="+687">New Caledonia</option>
                                                                                    <option  value="New Zealand:+64" data-code="+64">New Zealand</option>
                                                                                    <option  value="Nicaragua:+505" data-code="+505">Nicaragua</option>
                                                                                    <option  value="Niger:+227" data-code="+227">Niger</option>
                                                                                    <option  value="Nigeria:+234" data-code="+234">Nigeria</option>
                                                                                    <option  value="Niue:+683" data-code="+683">Niue</option>
                                                                                    <option  value="Norfolk Island:+672" data-code="+672">Norfolk Island</option>
                                                                                    <option  value="Northern Mariana Islands:+1670" data-code="+1670">Northern Mariana Islands</option>
                                                                                    <option  value="Norway:+47" data-code="+47">Norway</option>
                                                                                    <option  value="Oman:+968" data-code="+968">Oman</option>
                                                                                    <option  value="Pakistan:+92" data-code="+92">Pakistan</option>
                                                                                    <option  value="Palau:+680" data-code="+680">Palau</option>
                                                                                    <option  value="Palestinian Territory, Occupied:+970" data-code="+970">Palestinian Territory, Occupied</option>
                                                                                    <option  value="Panama:+507" data-code="+507">Panama</option>
                                                                                    <option  value="Papua New Guinea:+675" data-code="+675">Papua New Guinea</option>
                                                                                    <option  value="Paraguay:+595" data-code="+595">Paraguay</option>
                                                                                    <option  value="Peru:+51" data-code="+51">Peru</option>
                                                                                    <option  value="Philippines:+63" data-code="+63">Philippines</option>
                                                                                    <option  value="Pitcairn:+872" data-code="+872">Pitcairn</option>
                                                                                    <option  value="Poland:+48" data-code="+48">Poland</option>
                                                                                    <option  value="Portugal:+351" data-code="+351">Portugal</option>
                                                                                    <option  value="Puerto Rico:+1939" data-code="+1939">Puerto Rico</option>
                                                                                    <option  value="Qatar:+974" data-code="+974">Qatar</option>
                                                                                    <option  value="Romania:+40" data-code="+40">Romania</option>
                                                                                    <option  value="Russia:+7" data-code="+7">Russia</option>
                                                                                    <option  value="Rwanda:+250" data-code="+250">Rwanda</option>
                                                                                    <option  value="Reunion:+262" data-code="+262">Reunion</option>
                                                                                    <option  value="Saint Barthelemy:+590" data-code="+590">Saint Barthelemy</option>
                                                                                    <option  value="Saint Helena, Ascension and Tristan Da Cunha:+290" data-code="+290">Saint Helena, Ascension and Tristan Da Cunha</option>
                                                                                    <option  value="Saint Kitts and Nevis:+1869" data-code="+1869">Saint Kitts and Nevis</option>
                                                                                    <option  value="Saint Lucia:+1758" data-code="+1758">Saint Lucia</option>
                                                                                    <option  value="Saint Martin:+590" data-code="+590">Saint Martin</option>
                                                                                    <option  value="Saint Pierre and Miquelon:+508" data-code="+508">Saint Pierre and Miquelon</option>
                                                                                    <option  value="Saint Vincent and the Grenadines:+1784" data-code="+1784">Saint Vincent and the Grenadines</option>
                                                                                    <option  value="Samoa:+685" data-code="+685">Samoa</option>
                                                                                    <option  value="San Marino:+378" data-code="+378">San Marino</option>
                                                                                    <option  value="Sao Tome and Principe:+239" data-code="+239">Sao Tome and Principe</option>
                                                                                    <option  value="Saudi Arabia:+966" data-code="+966">Saudi Arabia</option>
                                                                                    <option  value="Senegal:+221" data-code="+221">Senegal</option>
                                                                                    <option  value="Serbia:+381" data-code="+381">Serbia</option>
                                                                                    <option  value="Seychelles:+248" data-code="+248">Seychelles</option>
                                                                                    <option  value="Sierra Leone:+232" data-code="+232">Sierra Leone</option>
                                                                                    <option  value="Singapore:+65" data-code="+65">Singapore</option>
                                                                                    <option  value="Slovakia:+421" data-code="+421">Slovakia</option>
                                                                                    <option  value="Slovenia:+386" data-code="+386">Slovenia</option>
                                                                                    <option  value="Solomon Islands:+677" data-code="+677">Solomon Islands</option>
                                                                                    <option  value="Somalia:+252" data-code="+252">Somalia</option>
                                                                                    <option  value="South Africa:+27" data-code="+27">South Africa</option>
                                                                                    <option  value="South Sudan:+211" data-code="+211">South Sudan</option>
                                                                                    <option  value="South Georgia and the South Sandwich Islands:+500" data-code="+500">South Georgia and the South Sandwich Islands</option>
                                                                                    <option  value="Spain:+34" data-code="+34">Spain</option>
                                                                                    <option  value="Sri Lanka:+94" data-code="+94">Sri Lanka</option>
                                                                                    <option  value="Sudan:+249" data-code="+249">Sudan</option>
                                                                                    <option  value="Suriname:+597" data-code="+597">Suriname</option>
                                                                                    <option  value="Svalbard and Jan Mayen:+47" data-code="+47">Svalbard and Jan Mayen</option>
                                                                                    <option  value="Swaziland:+268" data-code="+268">Swaziland</option>
                                                                                    <option  value="Sweden:+46" data-code="+46">Sweden</option>
                                                                                    <option  value="Switzerland:+41" data-code="+41">Switzerland</option>
                                                                                    <option  value="Syrian Arab Republic:+963" data-code="+963">Syrian Arab Republic</option>
                                                                                    <option  value="Taiwan:+886" data-code="+886">Taiwan</option>
                                                                                    <option  value="Tajikistan:+992" data-code="+992">Tajikistan</option>
                                                                                    <option  value="United Republic of Tanzania:+255" data-code="+255">United Republic of Tanzania</option>
                                                                                    <option  value="Thailand:+66" data-code="+66">Thailand</option>
                                                                                    <option  value="Timor-Leste:+670" data-code="+670">Timor-Leste</option>
                                                                                    <option  value="Togo:+228" data-code="+228">Togo</option>
                                                                                    <option  value="Tokelau:+690" data-code="+690">Tokelau</option>
                                                                                    <option  value="Tonga:+676" data-code="+676">Tonga</option>
                                                                                    <option  value="Trinidad and Tobago:+1868" data-code="+1868">Trinidad and Tobago</option>
                                                                                    <option  value="Tunisia:+216" data-code="+216">Tunisia</option>
                                                                                    <option  value="Turkey:+90" data-code="+90">Turkey</option>
                                                                                    <option  value="Turkmenistan:+993" data-code="+993">Turkmenistan</option>
                                                                                    <option  value="Turks and Caicos Islands:+1649" data-code="+1649">Turks and Caicos Islands</option>
                                                                                    <option  value="Tuvalu:+688" data-code="+688">Tuvalu</option>
                                                                                    <option  value="Uganda:+256" data-code="+256">Uganda</option>
                                                                                    <option  value="Ukraine:+380" data-code="+380">Ukraine</option>
                                                                                    <option  value="United Arab Emirates:+971" data-code="+971">United Arab Emirates</option>
                                                                                    <option  value="United Kingdom:+44" data-code="+44">United Kingdom</option>
                                                                                    <option  value="United States:+1" data-code="+1">United States</option>
                                                                                    <option  value="Uruguay:+598" data-code="+598">Uruguay</option>
                                                                                    <option  value="Uzbekistan:+998" data-code="+998">Uzbekistan</option>
                                                                                    <option  value="Vanuatu:+678" data-code="+678">Vanuatu</option>
                                                                                    <option  value="Bolivarian Republic of Venezuela:+58" data-code="+58">Bolivarian Republic of Venezuela</option>
                                                                                    <option  value="Vietnam:+84" data-code="+84">Vietnam</option>
                                                                                    <option  value="Virgin Islands, British:+1284" data-code="+1284">Virgin Islands, British</option>
                                                                                    <option  value="Virgin Islands, U.S.:+1340" data-code="+1340">Virgin Islands, U.S.</option>
                                                                                    <option  value="Wallis and Futuna:+681" data-code="+681">Wallis and Futuna</option>
                                                                                    <option  value="Yemen:+967" data-code="+967">Yemen</option>
                                                                                    <option  value="Zambia:+260" data-code="+260">Zambia</option>
                                                                                    <option  value="Zimbabwe:+263" data-code="+263">Zimbabwe</option>
                                                                            </select>
                                </div>
                                                                                        <div className="single-input mb-3">
                                    <label className="input-label">Numéro de TéléPhone  <span className="text-danger">*</span> </label>
                                    <div className="input-field input-group">
                                        <span className="input-group-text" id="dial-code">+237</span>
                                        <input type="text" name="phone" value="" />
                                    </div>
                                </div>
                                                                                        <div className="single-input mb-3">
                                    <label className="input-label">Code de parrainage</label>
                                    <div className="input-field">
                                        <input type="text" name="invite" value="" className="box-input" />
                                    </div>
                                </div>
                                                                                        <div className="single-input mb-3">
                                    <label className="input-label">Genre  <span className="text-danger">*</span> </label>
                                    <select name="gender" className="box-input w-100" id="gender">
                                                                                    <option  value="Male">Male</option>
                                                                                    <option  value="Female">Female</option>
                                                                                    <option  value="Others">Autres</option>
                                                                            </select>
                                </div>
                                                        <div className="single-input has-right-icon has-left-icon">
                                <label className="input-label">Mot de passe<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="password" className="box-input password-input" name="password" required />
                                    <div className="password">
                                        <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                    </div>
                                    <span className="icon">
                                        <i className="icon-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="single-input has-right-icon has-left-icon">
                                <label className="input-label">Confirmez le mot de passe<span className="text-danger">*</span></label>
                                <div className="input-field">
                                    <input type="password" name="password_confirmation" className="box-input password-input" required />
                                    <div className="password">
                                        <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                    </div>
                                    <span className="icon">
                                        <i className="icon-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="inputs">
                                <button type="submit" className="site-btn primary-btn w-100">Créez un compte</button>
                            </div>
                        </form>
                    </div>
                    <div className="bottom-content">
                        <div className="have-acount">
                            <p>Déjà inscrit ? <Link href="/login">Se connecter</Link></p>
                        </div>
                    </div>
                </div>
                <div className="terms-user">
                    <p>En cliquant sur créer un compte vous acceptez nos <Link className="link" href="/terms-and-conditions">Termes et Conditions.</Link></p>
                </div>
            </div>
        </div>
    </section>

        <footer>
            <div className="dashboard-footer-area">
                <div className="need-content">
                    <p className="description"><a href="contact.html">Need Help?</a></p>
                </div>
            </div>
        </footer>
        </>
    )
}