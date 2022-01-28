import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useFormik} from 'formik';
import * as yup from 'yup' 



function Addmovies() {

    let navigate = useNavigate();
    let url = "https://61f24cae2219930017f5045b.mockapi.io/movies/"

    let handleSubmit = async(values)=>{
        try {
            let response = await axios.post(url,values)
            console.log(response)
            if(response.status==201)
                navigate('/all-movies')
            else
                alert("Internal server error!")
            
        } catch (error) {
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            Producer:'',
            Rating:'',
            Review:''
        },
        validationSchema: yup.object({
            name:yup.string().required('Required'),
            Producer:yup.string().required('Required'),
            Rating:yup.string().matches(/^\d{2}$/,"Number not valid").required('Required'),
            Review:yup.string().required('Required')
        }),
        onSubmit:values=>{
            console.log(values)
            handleSubmit(values)
        }
    })

    return <div className="addmovies">
            <h3>Add movies Details</h3>
            <hr class="sidebar-divider my-0"/>
            <form onSubmit ={formik.handleSubmit}>
                <div className='form-group'>
                    <label for='name'>Movies Name</label>
                    <input
                    id="name"
                    name='name'
                    type='text'
                    className='form-control'
                    placeholder='Enter Movies Name'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
                </div>

                <div className='form-group'>
                    <label for='Producer'>Producer Name</label>
                    <input
                    id="Producer"
                    name='Producer'
                    type='text'
                    className='form-control'
                    placeholder='Producer name'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.Producer}
                    />
                    {formik.touched.Producer && formik.errors.Producer?<div style={{color:'red'}}>{formik.errors.Producer}</div>:null}
                </div>

                <div className='form-group'>
                    <label for='Rating'>IMDB Rating</label>
                    <input
                    id="Rating"
                    name='Rating'
                    type='text'
                    className='form-control'
                    placeholder='IMDB Rating'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Rating}
                    />
                    {formik.touched.Rating && formik.errors.Rating?<div style={{color:'red'}}>{formik.errors.Rating}</div>:null}
                </div>

                <div className='form-group'>
                    <label for='Review'>Review</label>
                    <input
                    id="Review"
                    name='Review'
                    type='text'
                    className='form-control'
                    placeholder='Review'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Review}
                    />
                    {formik.touched.Review && formik.errors.Review?<div style={{color:'red'}}>{formik.errors.Review}</div>:null}
                </div>
                
                <div className='form-group'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </div> 
            </form>
        </div>
}

export default Addmovies
