import React from 'react';
import {Button} from 'antd';
import './App.scss';

const App: React.FC = () => (
    <>
        <div className={"one"}>
            <div className={"two"}></div>
        </div>
        <div className="App">
            <Button type="primary">Button</Button>
        </div>
    </>
);

export default App;
