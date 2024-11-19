// import React from 'react';
// // npm install semantic-ui-react semantic-ui-css (install this in terminal before importing)
// import { Form, Button, FormField } from 'semantic-ui-react';
// import { useForm } from 'react-hook-form';
// import './Form.css'

// export default function FormValidation() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Form.Field>
//           <label>First Name</label> <span>{errors.firstName && <span>Please check the First Name</span>}</span>
//           <input
//             placeholder='First Name'
//             type='text'
//             {...register('firstName', { required: true, maxLength: 20 })}
//           />
//         </Form.Field>
        
//         <Form.Field>
//           <label>Last Name</label> <span>{errors.lastName && <span>Please check the Last Name</span>}</span>
//           <input
//             placeholder='Last Name'
//             type='text'
//             {...register('lastName', { required: true, maxLength: 20, pattern: /^[a-zA-Z]/})}
//           />
//         </Form.Field>
        
//         <Form.Field>
//           <label>Email</label> <span>{errors.email && <span>Please check the Email</span>}</span>
//           <input
//             placeholder='Email'
//             type='email'
//             {...register('email', {
//               required: true,
//               pattern:
//                 /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//             })}
//           />
//         </Form.Field>
        
//         <Form.Field>
//           <label>Password</label> <span>{errors.password && <span>Please check the Password</span>}</span>
//           <input
//             placeholder='Password'
//             type='password'
//             {...register('password', {
//               required: true,
//               pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
//             })}
//           />
//         </Form.Field>
        
//         <FormField>
//           <label htmlFor="">Re-enter Password</label> <span>{errors.confirm && <span>password not matched</span>}</span>
//           <input 
//           type="password" 
//           placeholder='confirm-password'
//           {...register('confirm',{ required: true, validate: (value) => value === password })}
//           />
//         </FormField>
        
//         <FormField>
//           <label htmlFor="">Hobbies</label> <span>{errors.hobbies && <span>atleast check point any one</span>}</span> <br />
//           <input type="checkbox" {...register('hobbies', { required: true })} value="reading" /> Reading <br />
//           <input type="checkbox" {...register('hobbies', { required: true })} value="sleeping" /> Sleeping <br />
//           <input type="checkbox" {...register('hobbies', { required: true })} value="walking" /> Walking <br />
//           <input type="checkbox" {...register('hobbies', { required: true })} value="none" /> None <br />
//          </FormField>

//          <FormField>
//           <label htmlFor="">Gender</label> <span>{errors.gender && <span>select the gender</span>}</span> <br />
//           <input type="radio" {...register('gender', { required: true })} value="male" /> Male <br />
//           <input type="radio" {...register('gender', { required: true })} value="female" /> Female <br />
          
//          </FormField>
//         <Button type='submit'>Submit</Button>
//       </Form>
//     </div>
//   );
// }


import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Form.css'
const Form = () => {
  return (
    <div>
        <Row>
            <Col lg={4} className='back'>
            <h2>Things you can do with magic bricks</h2>
            <ol>
                <li>Post one Single Property for FREE</li>
                <li>Set property alerts for your requirement</li>
                <li>Get accessed by over 1 Lakh buyers</li>
                <li>Showcase your property as Rental, PG or for Sale</li>
                <li>Get instant queries over Phone, Email and SMS</li>
                <li>Performance in search & Track responses & views online</li>
                <li>Add detailed property information & multiple photos per listing</li>
            </ol>
            </Col>
            <Col>
            <Col lg={3}></Col>
            <Col lg={6}>
                {/* <form >
                    <Form.Label>LOGIN</Form.Label>
                    ``
                </form> */}
            </Col>
            <Col lg={3}></Col>
            </Col>
        </Row>
    </div>
  )
}

export default Form