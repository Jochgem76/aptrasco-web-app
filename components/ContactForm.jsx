import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    console.log(submitted)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onChange',
    });

    async function submitHandler(data, event) {
        event.preventDefault();
        console.log('Sending')

        const firstname = data.firstName;
        const lastname = data.lastName;
        const phone = data.phone;
        const email = data.email;
        const enquiry = data.enquiry;

        let result = {
            firstname,
            lastname,
            phone,
            email,
            enquiry
        };

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        }).then((res) => {
            console.log('Response received')
            setSubmitting(true)
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitting(false)
                setSubmitted(true)
            }
        })
    }


    return (
        <section>
            <div className="px-6 lg:px-20 w-full">
                <div className="my-8 lg:my-14">
                    <h1 className="text-center lg:text-left text-3xl lg-text-left lg:text-3xl text-black font-light mb-0 lg:mb-4">Contact Form</h1>
                    <form onSubmit={handleSubmit(submitHandler)} >
                        <div className="flex flex-wrap w-full">
                            <div className="w-full lg:w-1/2 px-0 lg:px-6">
                                <div className="font-light h-6 mt-3 text-black text-sm leading-8 uppercase"><span className="text-blue-400 mr-1">*</span> Enter your First name:</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-400">
                                    <input
                                        placeholder='First Name*'
                                        type='text'
                                        autoComplete='name'
                                        {...register("firstName", {
                                            minLength: { value: 2, message: "First name must be at least 2 characters" }, required: 'Your first name is required'
                                        })}
                                        className="p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800" />
                                </div>
                                {errors.firstName && <p className="text-red-500 text-xs ml-2">{errors.firstName.message}</p>}
                            </div>
                            <div className="w-full lg:w-1/2 px-0 lg:px-6">
                                <div className="font-light h-6 mt-3 text-black text-sm leading-8 uppercase"><span className="text-blue-400 mr-1">*</span> Enter your Last name:</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-400">
                                    <input
                                        placeholder='Last Name*'
                                        type='text'
                                        autoComplete='name'
                                        {...register("lastName", {
                                            minLength: { value: 2, message: "Last name must be at least 2 characters" }, required: 'Your last name is required'
                                        })}
                                        className="p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800" />
                                </div>
                                {errors.lastName && <p className="text-red-500 text-xs ml-2">{errors.lastName.message}</p>}
                            </div>
                            <div className="w-full lg:w-1/2 px-0 lg:px-6">
                                <div className="font-light h-6 mt-3 text-black text-sm leading-8 uppercase"><span className="text-blue-400 mr-1">*</span> Enter your phone number:</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-400">
                                    <input
                                        placeholder='Phone number*'
                                        type='text'
                                        autoComplete='tel'
                                        {...register("phone", {
                                            minLength: { value: 8, message: "Number must be at least 8 characters" }, required: 'Your phone number is required'
                                        })}
                                        className="p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800" />
                                </div>
                                {errors.phone && <p className="text-red-500 text-xs ml-2">{errors.phone.message}</p>}
                            </div>
                            <div className="w-full lg:w-1/2 px-0 lg:px-6">
                                <div className="font-light h-6 mt-3 text-black text-sm leading-8 uppercase"><span className="text-blue-400 mr-1">*</span> Enter your Email:</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-400">
                                    <input
                                        placeholder='Email*'
                                        type='email'
                                        autoComplete='email'
                                        {...register("email", {
                                            required: { value: true, message: 'A valid email is required' },
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Please enter a valid Email'
                                            }
                                        })}
                                        className="p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                            </div>
                            <div className="w-full lg:w-full px-0 lg:px-6">
                                <div className="font-light h-6 mt-3 text-black text-sm leading-8 uppercase"><span className="text-blue-400 mr-1">*</span> Your Enquiry:</div>
                                <div className="my-2 bg-white p-1 flex border border-gray-400">
                                    <textarea
                                        placeholder="What's your enquiry?*"
                                        type="text"
                                        style={{ height: 150 }}
                                        {...register("enquiry", {
                                            minLength: { value: 10, message: "Enquiry must be at least 10 characters" }, required: 'Your enquiry is required'
                                        })}
                                        className="p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800" />
                                </div>
                                {errors.enquiry && <p className="text-red-500 text-xs ml-2">{errors.enquiry.message}</p>}
                            </div>
                        </div>
                        <div className="mt-6 text-center lg:text-left">
                            <button className="text-lg lg-text-left lg:text-xl text-black font-light mb-2 inline-flex">
                                {submitting ? (
                                    <>
                                        <svg role="status" className="inline w-8 h-8 mr-4 text-white animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <p>Processing . . .</p>
                                    </>) : (
                                    <p>Submit Form</p>
                                )}
                                <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-3 mt-2.5 text-black">
                                    <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
                                </svg>
                            </button>
                            <div className="hidden lg:flex w-1/6 border-t border-black"></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ContactForm;