
import { Form, Field } from 'react-final-form';
import {Container} from 'reactstrap';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
}

export const FinalForm = () => (
  <Container>
    <h1>React Final Form - Simple Example</h1>
    <a
      href="https://final-form.org/react"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Docs
    </a>
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label>First Name</label>&nbsp;
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className='mb-3'>
            <label>Last Name</label>&nbsp;
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className='mb-3'>
            <label>Employed</label>&nbsp;
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div className='mb-3'>
            <label>Favorite Color</label>&nbsp;
            <Field name="favoriteColor" component="select">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
          </div>
          <div className='mb-3'>
            <label>Toppings</label>&nbsp;
            <Field name="toppings" component="select" multiple>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div>
          <div className='mb-3'>
            <label>Sauces</label>&nbsp;
            <div>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              &nbsp;
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              &nbsp;
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />{' '}
                Mayonnaise
              </label>
              &nbsp;
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />{' '}
                Guacamole 🥑
              </label>
            </div>
          </div>
          <div className='mb-3'>
            <label>Best Stooge</label>
            <div>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="larry"
                />{' '}
                Larry
              </label>
              &nbsp;
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="moe"
                />{' '}
                Moe
              </label>
              &nbsp;
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="curly"
                />{' '}
                Curly
              </label>
            </div>
          </div>
          <div className='mb-3'>
            <label>Notes</label>&nbsp;
            <Field name="notes" component="textarea" placeholder="Notes" />
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