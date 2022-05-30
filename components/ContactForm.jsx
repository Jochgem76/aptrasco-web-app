import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false)
    const router = useRouter();

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
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true);
                router.push("/");
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
                                {submitted ? (
                                    <p>Form Submitted, thank you!</p>) : (<p>Submit Form</p>
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