import { express } from "express";
import appointmentController from "./AppointmentController";
import doctorController from "./DoctorController";
import pacientController from "./PacientController";
import prescriptionController from "./PrescriptionController";

let router = express.Router();

router.get(
  "/", function(req, res) {
    console.log("Hi!");
    res.status(200).json({ message: "Hi!"});
  }
);

router.use("/", appointmentController);
router.use("/", pacientController);
router.use("/", prescriptionController);
router.use("/", doctorController);

export default router;
