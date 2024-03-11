import React from 'react';
import styles from './App.module.scss';
import {Button} from "antd";

const App: React.FC = () => (
    <div className={styles.App}>
        <Button type="primary">Button</Button>
    </div>
);

export default App;
