import './App.css';
import Card from './components/UI/Card';
import ContactList from './components/contact/ContactList';
import SocialMedias from './components/contact/SocialMedias';
import Form from './components/form/Form';
import { FormData } from './components/FormContext';

function App() {
  return (
    <FormData>
      <ContactList />
      <Card>
        <Form />
      </Card>
      <SocialMedias />
    </FormData>
  );
}

export default App;
