import path from "path";
import fs from "fs/promises";
import { readFile } from "fs";
import { stringify } from "querystring";
import { student } from "../module/student";
import { course } from "../module/course";
import { json } from "stream/consumers";
let filepaths = path.join(__dirname, "../../student.json");
let filepathc = path.join(__dirname, "../../course.json");
// hepler function to check if file exist or not : 
async function exists(file: any) {
    try {
        await fs.access(file);
        return true;
    } catch {
        return false;
    }
}
export async function writejsonfile(file: any, data: any) {

    try {
        if (await exists(file)) {
            const rawdata = await fs.readFile(file, "utf8");
            const sub = await JSON.parse(rawdata);
            sub.push(data);
            await fs.writeFile(file, JSON.stringify(sub, null, 2));

        }
        else {
            await fs.writeFile(file, JSON.stringify(data, null, 2));
        }
    }
    catch (e) {
        console.log("error");
    }

}
export async function readjsonfile_s(): Promise<student[]> {

    try {
        await fs.access(filepaths);
        const data = await fs.readFile(filepaths, "utf8");
        return JSON.parse(data) as student[];
    }
    catch (e) {
        console.log("error")
        return [];
    }
}
export async function readjsonfile_c(): Promise<course[]> {

    try {
        await fs.access(filepathc);
        const data = await fs.readFile(filepathc, "utf8");
        return JSON.parse(data) as course[];
    }
    catch (e) {
        console.log("error")
        return [];
    }
}