import React from 'react'
import {Form, useFormik } from 'formik'

function Youtubeform() {
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            channel:''
        },
        onSubmit: values => {
            console.log("form data",values)
        }
       
    })
    //  console.log("form values", formik.values)

    return (
        <div>
            <form align='center' onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <br></br>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                <br></br>
                <br></br>
                <br></br>

                <label htmlFor='email'>Email</label>
                <br></br>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                <br></br>
                <br></br>
                <br></br>

                <label htmlFor='channel'>Channel</label>
                <br></br>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>
                <br>
                </br>
                <br></br>
                <br></br>
                
                <button>Submit </button>
            </form>
            
        </div>
    )
}

export default Youtubeform
