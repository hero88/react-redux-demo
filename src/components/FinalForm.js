
import { Form, Field } from 'react-final-form';
import {Container} from 'reactstrap';
import { fetchAPI } from '../api/Common';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  const URL = "http://localhost:3001/students/";
  let raw = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  };

  fetchAPI(URL, raw)
  .then(() => alert("Student added!"))
  .catch(err => console.log(err))

  // window.alert(JSON.stringify(values, 0, 2));
}

export const FinalForm = () => (
  <Container>
    <h2>React Final Form - Add New Student</h2>
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label>Fullname:</label>&nbsp;
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className='mb-3'>
            <label>Address</label>&nbsp;
            <Field
              name="address"
              component="input"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className='mb-3'>
            <label>Birthday</label>&nbsp;
            <Field
              name="birthday"
              component="input"
              type="date"
              placeholder="Birthday"
            />
          </div>
          <div className='mb-3'>
            <label>Gender</label>
            <div>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="male"
                />{' '}
                Male
              </label>
              &nbsp;
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="female"
                />{' '}
                Female
              </label>
            </div>
          </div>
          <div className='mb-3'>
            <label>School Year</label>&nbsp;
            <Field
              name="schoolYear"
              component="input"
              type="number"
              placeholder="School Year"
            />
          </div>
          <div className="mb-3">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            &nbsp;
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre style={{
                border:'1px solid #ccc', 
                background: 'rgba(0, 0, 0, 0.1)', 
                boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.2)',
                padding: '20px'
                }}
            >{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Container>
)