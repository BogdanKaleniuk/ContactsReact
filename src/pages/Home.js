<<<<<<< HEAD
import { Image } from '@chakra-ui/react';

import image from '../images/5177903.png';
=======
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingLeft: 100,
    paddingRight: 100,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
<<<<<<< HEAD
      <h1 style={styles.title}>
        PhoneBook
        <Image src={image} alt="img" objectFit="cover" width="500px" />
      </h1>
=======
      <h1 style={styles.title}>PhoneBook</h1>
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
    </div>
  );
}
