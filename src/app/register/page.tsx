'use client'
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signup } from "@/functions/signup";
import Loader from "@/components/loader";
import { useToast } from "@/hooks/use-toast";

export default function Page() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const invite = searchParams.get("invite");
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        cPassword: '',
        username: '',
        telephone: '',
        country: 'cm',
        referral_code: 'none'
    })

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        cPassword: '',
        country: '',
        username: '',
        telephone: ''
    })

    const [isValid, setIsValid] = useState(false)

    // Real-time validation function
    const validateForm = (name: string, value: string) => {
        const newErrors = { ...errors }

        switch (name) {
            case 'first_name':
                newErrors.first_name = value ? '' : 'First name is required.'
                break
            case 'last_name':
                newErrors.last_name = value ? '' : 'Last name is required.'
                break
            case 'username':
                newErrors.username = value ? '' : 'user name is required.'
                break
            case 'country':
                newErrors.country = value ? '' : 'Country is required.'
                break
            case 'telephone':
                newErrors.telephone = value ? '' : 'Telephone is required.'
                break
            case 'email':
                newErrors.email = /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid.'
                break
            case 'password':
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
                newErrors.password = passwordRegex.test(value) ? '' : 'Password must be at least 6 characters long, contain one uppercase letter, one number, and one special character.'
                break
            case 'cPassword':
                newErrors.cPassword = value === formData.password ? '' : 'Passwords do not match.'
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
        console.log(invite)
        const allFieldsFilled = Object.values(formData).every(field => field !== '')
        const noErrors = Object.values(errors).every(error => error === '')
        setIsValid(allFieldsFilled && noErrors)
    }, [formData, errors])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(invite){
            setFormData({...formData, referral_code: Array.isArray(invite) ? invite[0] : invite})
        }
        setLoading(true)
        console.log(formData)
        const signUp = await signup(formData)
        console.log(signUp)
        if (signUp === true) {
            setLoading(false)
            toast({
                variant: "success",
                title: "Inscription Réussi.",
                description: "Vous avez été inscrit. Vous serez diriger vers votre pannel.",
            })
            router.push('/dashboard')
        } else {
            toast({
                variant: "destructive",
                title: "Erreur lors de l'inscription.",
                description: "Il se pourrait que vous n'ayez pas bien rempli vos informations ou cette utilisateur existe déjà.",
            })
            console.log(signUp)
        }
        setLoading(false)
        // Perform the submit logic here
    }

    return (
        <>
            {loading && <Loader />}
            <section className="sign-up-area">
                <div className="auth-wrapper">
                    <div className="contents-inner">
                        <div className="content">

                            <div className="top-content">
                                <h3 className="title">💪 Créez un compte</h3>
                            </div>
                            <div className="auth-form-wrapper">

                                <form onSubmit={handleSubmit}>
                                    <input type="hidden" name="_token" value="uEqEqttfMpe80lQy5fGcPsxJnWHkTkcmrhsJ4zF3" />                            <div className="single-input has-left-icon">
                                        <label className="input-label">Prénom<span className="text-danger">*</span></label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type="text" className="box-input name-input" name="first_name" required />
                                            <span className="icon">
                                                <i className="icon-profile-circle"></i>
                                            </span>
                                        </div>
                                        {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name}</p>}
                                    </div>
                                    <div className="single-input has-left-icon">
                                        <label className="input-label">Nom<span className="text-danger">*</span></label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type="text" className="box-input name-input" name="last_name" required />
                                            <span className="icon">
                                                <i className="icon-profile-circle"></i>
                                            </span>
                                        </div>
                                        {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name}</p>}
                                    </div>
                                    <div className="single-input has-left-icon">
                                        <label className="input-label" >Nom d'utilisateur <span className="text-danger">*</span> </label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type="text" className="box-input name-input" name="username" required />
                                            <span className="icon">
                                                <i className="icon-profile-circle"></i>
                                            </span>
                                        </div>
                                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                                    </div>
                                    <div className="single-input has-left-icon">
                                        <label className="input-label" >Adresse mail<span className="text-danger">*</span></label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type="email" className="box-input email-input" name="email" required />
                                            <span className="icon">
                                                <i className="icon-sms"></i>
                                            </span>
                                        </div>
                                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                                    </div>
                                    <div className="single-input mb-3">
                                        <label className="input-label" >Country  <span className="text-danger">*</span> </label>
                                        <select name="country" className="box-input w-100" id="countrySelect">
                                            <option defaultValue="Cameroon:+237" data-code="+237">Cameroon</option>
                                            <option value="Central African Republic:+236" data-code="+236">Central African Republic</option>
                                            <option value="Chad:+235" data-code="+235">Chad</option>
                                            <option value="Congo:+242" data-code="+242">Congo</option>
                                            <option value="The Democratic Republic of the Congo:+243" data-code="+243">The Democratic Republic of the Congo</option>
                                            <option value="Cote d&#039;Ivoire:+225" data-code="+225">Cote d&#039;Ivoire</option>
                                            <option value="Nigeria:+234" data-code="+234">Nigeria</option>
                                        </select>
                                    </div>
                                    <div className="single-input mb-3">
                                        <label className="input-label">Numéro de TéléPhone  <span className="text-danger">*</span> </label>
                                        <div className="input-field input-group">
                                            <span className="input-group-text" id="dial-code">+237</span>
                                            <input onChange={handleChange} type="text" name="telephone" />
                                        </div>
                                        {errors.telephone && <p style={{ color: 'red' }}>{errors.telephone}</p>}
                                    </div>
                                    <div className="single-input mb-3">
                                        <label className="input-label">Code de parrainage</label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type="text" name="referral_code" className="box-input" />
                                        </div>
                                    </div>
                                    <div className="single-input has-right-icon has-left-icon">
                                        <label className="input-label">Mot de passe<span className="text-danger">*</span></label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type={visible ? "text" : "password"} className="box-input password-input" name="password" required />
                                            <div onClick={() => setVisible(!visible)} className="password">
                                                <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                            </div>
                                            <span className="icon">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        {errors.password && (
                                            <div style={{ color: 'red' }}>
                                                <p>Password must:</p>
                                                <ul>
                                                    <li>- Be at least 6 characters</li>
                                                    <li>- Contain at least one uppercase letter</li>
                                                    <li>- Contain at least one number</li>
                                                    <li>- Contain at least one special character</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className="single-input has-right-icon has-left-icon">
                                        <label className="input-label">Confirmez le mot de passe<span className="text-danger">*</span></label>
                                        <div className="input-field">
                                            <input onChange={handleChange} type={visible ? "text" : "password"} name="cPassword" className="box-input password-input" required />
                                            <div onClick={() => setVisible(!visible)} className="password">
                                                <img src="assets/frontend/default/images/icons/eye-off.svg" className="password-hide-show eyeicon" alt="" />
                                            </div>
                                            <span className="icon">
                                                <i className="icon-lock"></i>
                                            </span>
                                        </div>
                                        {errors.cPassword && <p style={{ color: 'red' }}>{errors.cPassword}</p>}
                                    </div>
                                    <div className="inputs">
                                        <button disabled={!isValid} type="submit" className="site-btn primary-btn w-100">Créez un compte</button>
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
                            <p>En cliquant sur créer un compte vous acceptez nos <Link className="link" href="/terms">Termes et Conditions.</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="dashboard-footer-area">
                    <div className="need-content">
                        <p className="description"><Link href="/contact">Need Help?</Link></p>
                    </div>
                </div>
            </footer>

        </>
    )
}