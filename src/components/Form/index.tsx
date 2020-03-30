import React from 'react';
import { Input, Submit, InputError } from './styles';
import { Col, Row } from 'react-styled-flexboxgrid';
import { useForm } from 'react-hook-form'
import { ReactComponent as ErrorIcon } from 'assets/error.svg';

interface FormData {
  name?: string;
  mobile?: string;
  email: boolean;
  postNumber?: string;
  city?: string;
}

const ContactForm: React.FunctionComponent = (props) => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = (values: FormData) => {
    /*TODO: Submit the data */
    console.log(values);
  };

  /*
    TODO:
     - The inputs can be populated by a "factory" function
     - More specific validation rules should be added
     - Error messages should be specific to their error type
 */

  return (
      <>
        <Row center={ 'xs' }>
          <Col xs={ 12 } md={ 8 }>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <Row>
                <Col xs={ 12 } md={ 12 }>
                  <Input
                    name="name"
                    placeholder={ 'Navn' }
                    aria-describedby={ 'name-error' }
                    aria-invalid={ !!errors.name }
                    hasError={ !!errors.name }
                    ref={ register({
                      required: true,
                      pattern: /^[A-Za-z]+$/i
                    }) }
                  />
                  { errors.name && <InputError id={ 'name-error' }><ErrorIcon/>This field is required</InputError> }
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 } md={ 6 }>
                  <Input
                    name="mobile"
                    placeholder={ 'Mobil' }
                    aria-required={ true }
                    aria-describedby={ 'mobile_error' }
                    aria-invalid={ !!errors.mobile }
                    hasError={ !!errors.mobile }
                    ref={ register({ required: true }) }
                  />
                  {
                    errors.mobile && <InputError id={'mobile_error'}><ErrorIcon/>This field is required</InputError>
                  }
                </Col>
                <Col xs={ 12 } md={ 6 }>
                  <Input
                    name="email"
                    placeholder={ 'E-mail' }
                    hasError={ !!errors.email }
                    aria-describedby={ 'email-error' }
                    aria-invalid={ !!errors.email }
                    ref={ register({ required: true }) }
                  />
                  { errors.email && <InputError id={ 'email-error' }><ErrorIcon/>This field is required</InputError> }
                </Col>
              </Row>
              <Row>
                <Col xs={ 6 }>
                  <Input
                    name="postNumber"
                    type={'number'}
                    placeholder={ 'Postnr.' }
                    ref={ register }
                  />
                </Col>
                <Col xs={ 6 }>
                  <Input
                    name="city"
                    placeholder={ 'City' }
                    aria-invalid={ !!errors.city }
                    ref={ register }
                  />
                </Col>
              </Row>
              <Row center={ 'xs' }>
                <Col xs={ 12 } md={ 7 }>
                  <Submit type={ 'submit' }>Ring mig op</Submit>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </>
  );
};

export default ContactForm;