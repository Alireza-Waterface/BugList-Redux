import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import List from "./components/list/List";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Form />
                <List />
            </div>
        </>
    );
};

export default App;