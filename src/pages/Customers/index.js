import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiUser } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { db } from '../../services/firebaseConnection';
import { collection, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'customers'), (snapshot) => {
      const updatedCustomers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setCustomers(updatedCustomers);
    });

    return () => unsubscribe();
  }, []); 

  return (
    <div>
      <Header/>

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>
        
        <Link to="/newCustomer" className="new">
          <FiPlus color="#FFF" size={25} />
          Cadastrar Cliente
        </Link> 

        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>{customer.name}</li>
            // Assuming 'name' is a field in your customer documents, adjust accordingly
          ))}
        </ul>
      </div>

    </div>
  );
}