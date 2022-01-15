import {
    Button,
    Card,
    createStyles,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import MainTable from "./components/MainTable";
import { TableData } from "./interface";

const headerList: string[] = ["名前", "タスク内容", "編集", "完了"];

let rows: TableData[] = [
    {
        name: "モーリー",
        content: "肩トレ",
        editBtn: (
            <Button color="secondary" variant="contained">
                編集
            </Button>
        ),
        deleteBtn: (
            <Button color="primary" variant="contained">
                完了
            </Button>
        ),
    },
    {
        name: "ドンキーコング",
        content: "バナナ補給",
        editBtn: (
            <Button color="secondary" variant="contained">
                編集
            </Button>
        ),
        deleteBtn: (
            <Button color="primary" variant="contained">
                完了
            </Button>
        ),
    },
];

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
    })
);

const Home: FC = () => {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
