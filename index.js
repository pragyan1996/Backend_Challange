import express from 'express';
import http from 'http';
import DBConfig from './config/'
import dotenv from 'dotenv-safe';
dotenv.load({
    path: `${__dirname}/config/.env`,
    sample: `${__dirname}/.env.example`,
    allowEmptyValues: false
})


const app = express();
const port = 3000;


const startServer = () => {
    server
}