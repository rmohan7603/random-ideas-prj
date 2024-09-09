// import '@fortawesome/fontawesome-free/css/all.css'
import Modal from './components/Modal';
import IdeaForm from './components/ideaForm';
import IdeaList from './components/ideaList';
import './css/style.css';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();