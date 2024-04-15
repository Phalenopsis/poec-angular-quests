import { Skill } from "./skill.model";

export type Developer = {
    lastName: string;
    firstName: string;
    age: number;
    gender: string;
    bio: string;
    skills: Skill[];
}