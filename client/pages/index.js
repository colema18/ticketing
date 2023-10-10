import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
    // axios.get('/api/users/currentuser').catch((err) => {
    //   console.log(err.message);
    // });
   
    return <h1>Landing Page</h1>;
  };

LandingPage.getInitialProps = async () => {
    if(typeof window === undefined){
        console.log('calling from server');
        const {data} = await axios.get(
            'https://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
            {
                headers: {
                    host: 'ticketing.dev'
                }
            }
        );
        return {currentUser: data};
        return data;
    }else{
        console.log('calling from client');
        const {data} = await axios.get('/api/users/currentuser');
        return data;
    }
};


export default LandingPage;