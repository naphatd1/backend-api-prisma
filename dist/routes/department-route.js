"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const department_controller_1 = require("../controllers/department-controller");
const router = express_1.default.Router();
router.get('/', department_controller_1.indexUser);
exports.default = router;
