import Clock from "./Clock";

const App = () => {
    let deadline = "Feb, 25, 2023";

    return (
        <div className="App">
            <Clock deadline={deadline} />
        </div>
    );
};

export default App;