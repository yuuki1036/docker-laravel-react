import { Button, Card, createStyles, makeStyles } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import MainTable from "./components/MainTable";
import { FormData, TableData } from "./interface";
import axios, { AxiosResponse } from "axios";
import PostForm from "./components/PostForm";

const headerList: string[] = ["名前", "タスク内容", "編集", "完了"];

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
    const [posts, setPosts] = useState<TableData[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        content: "",
    });

    useEffect(() => getPostData(), []);

    const getPostData = () => {
        axios
            .get("/api/posts")
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    };

    const inputChange = (e: any) => {
        const key: keyof FormData = e.target.name;
        const value: string = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    };

    const createPost = async () => {
        console.log(formData);
        if (formData == { name: "", content: "" }) {
            return;
        }
        await axios
            .post("api/post/create", {
                name: formData.name,
                content: formData.content,
            })
            .then((res: AxiosResponse) => {
                console.log(res.data);
                const tempPosts = posts;
                tempPosts.push(res.data);
                setPosts(tempPosts);
                setFormData({ name: "", content: "" });
            })
            .catch((err) => console.log(err));
    };

    let rows: TableData[] = [];
    posts.map((post) => {
        rows.push({
            name: post.name,
            content: post.content,
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
        });
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostForm
                                data={formData}
                                btnFunc={createPost}
                                inputChange={inputChange}
                            />
                        </Card>
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
