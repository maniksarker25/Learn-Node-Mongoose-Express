import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

// router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// use router ------------

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user is created successfully",
    data: user,
  });
});

// course router

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
});

// use params -------------
app.get("/:userId/:subId", logger, (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello World Developers Team!");
});

app.get("/useQuery", (req, res) => {
  console.log(req.query);
  res.send("nice send");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

// error handling --------------------

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send(something);
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "failed to get data" });
  }
});

// use global error handler ---------

app.get("/something",(req:Request,res:Response,next:NextFunction)=>{
  try {
    res.send(some)
    
  } catch (error) {
    next(error)
  }
})

// 
app.all("*",(req:Request,res:Response)=>{
  res.status(404).json({success:false,message:"route is not found"})
})

// global error handler ----------------
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
  if(error){
    res.status(400).json({success:false,message:"something went wrong"})
  }
})

export default app;
