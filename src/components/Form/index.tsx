import React from 'react';
import { Input, Submit } from './styles';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Form, Field, FieldRenderProps } from 'react-final-form';

interface Values {
  name?: string;
  mobile?: string;
  email: boolean;
  postNumber?: string;
  city?: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: Values) => {
  console.log("here", values);
  await delay(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

type Props = FieldRenderProps<string, any>;

const ContactForm: React.FunctionComponent = (props) => {
  return (
    <>
      <Row center={'xs'}>
        <Col xs={ 12 } md={ 8 }>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={ 12 } md={ 12 }>
                    <Field<string>
                      name="name"
                      component={({ input, meta, ...rest }: Props) => (
                        <Input type="text" {...input} {...rest} />
                      )}
                      placeholder={'Navn'}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={ 12 } md={ 6 }>
                    <Field<string>
                      name="mobile"
                      component={Input}
                      placeholder={'Mobil'}
                    />
                  </Col>
                  <Col xs={ 12 } md={ 6 }>
                    <Field<string>
                      name="email"
                      component={Input}
                      placeholder={'E-mail'}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={ 6 }>
                    <Field<string>
                      name="postNumber"
                      component={Input}
                      placeholder={'Postnr.'}
                    />
                  </Col>
                  <Col xs={ 6 }>
                    <Field<string>
                      name="city"
                      component={Input}
                      placeholder={'City'}
                    />
                  </Col>
                </Row>
                <Row center={'xs'}>
                  <Col xs={ 12 } md={ 7 }>
                    <Submit type={'submit'} >Ring mig op</Submit>
                  </Col>
                </Row>
              </form>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;