"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => {
    const app = (0, express_1.default)();
    const port = 3000;
    app.use(express_1.default.json());
    app.use(router_1.router);
    //teclado de emotion tecla win+.
    app.listen(port, () => {
        console.log(`🚗Server is runing on http://localhost:${port}`);
    });
})
    .catch(() => console.log('Erro ao conectar no mongoDb'));
