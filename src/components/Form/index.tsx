import React from 'react';
import { Input, Submit } from './styles';
import { Col, Row } from 'react-styled-flexboxgrid';

const Form: React.FunctionComponent = (props) => {
  return (
    <>
      <Row center={'xs'}>
        <Col xs={ 12 } md={ 8 }>
          <form>
            <Row>
              <Col xs={ 12 } md={ 12 }>
                <Input type={'text'} placeholder={'Navn'} />
              </Col>
            </Row>
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <Input type={'text'} placeholder={'Mobil'} />
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <Input type={'text'} placeholder={'E-mail'} />
              </Col>
            </Row>
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <Input type={'text'} placeholder={'Postnr.'} />
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <Input type={'text'} placeholder={'By'} />
              </Col>
            </Row>
            <Row center={'xs'}>
              <Col xs={ 12 } md={ 7 }>
                <Submit type={'submit'}>Ring mig op</Submit>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default Form;