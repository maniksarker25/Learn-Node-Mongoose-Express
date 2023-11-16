"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// use router ------------
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user is created successfully",
        data: user,
    });
});
// course router
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course,
    });
});
// use params -------------
app.get("/:userId/:subId", logger, (req, res) => {
    console.log(req.params);
    res.send("Hello World Developers Team!");
});
app.get("/useQuery", (req, res) => {
    console.log(req.query);
    res.send("nice send");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send("got data");
});
// error handling --------------------
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "failed to get data" });
    }
}));
// use global error handler ---------
app.get("/something", (req, res, next) => {
    try {
        res.send(some);
    }
    catch (error) {
        next(error);
    }
});
// 
app.all("*", (req, res) => {
    res.status(404).json({ success: false, message: "route is not found" });
});
// global error handler ----------------
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({ success: false, message: "something went wrong" });
    }
});
exports.default = app;
