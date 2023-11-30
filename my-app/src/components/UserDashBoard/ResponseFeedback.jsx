







import React, { useState } from 'react';
import { Button, Container, Form, Input, Table } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { responsefeedback } from '../../services/user-Service';
import { toast } from 'react-toastify';

function ResponseFeedback() {
  const [feedbackResponse, setFeedbackResponse] = useState('');
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      candidateId: id,
      feedbackResponse: feedbackResponse,
    };

    console.log(formData);
    responsefeedback(formData).then((resp)=>{
      console.log(resp)
      toast(resp)
      
   }).catch((error)=>{
       console.log(error);
       toast.error(error)
      })
  };

  return (
    <Container style={{ padding: '50px' }}>
      <div className="card mb-4">
        <div
          className="card-header"
          style={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '20px',
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Feedback Response
        </div>
        <Form style={{ marginLeft: '15px', marginRight: '15px' }}>
          <Table className="table table-hover" responsive bordered>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th scope="col" style={{ textAlign: 'center' }}>
                  FeedBack
                </th>
              </tr>
            </thead>
            <Input
              id="note"
              name="note"
              placeholder="Enter Feedback Response"
              className="rounded-0"
              onChange={(e) => setFeedbackResponse(e.target.value)}
              style={{ height: '400px', marginTop: '15px' }}
              type="textarea"
            />
            <Container className="text-center">
              <Button
                style={{
                  marginTop: '15px',
                  textAlign: 'center',
                  fontSize: '25px',
                  backgroundColor: '#712856',
                }}
                className="rounded-0"
                color="primary"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Container>
          </Table>
        </Form>
      </div>
    </Container>
  );
}

export default ResponseFeedback;