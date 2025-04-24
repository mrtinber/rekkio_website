import { execSync } from "child_process";
import path from "path";

export function getLastUpdated(filePath: string): string | null {
    const fullPath = path.resolve(process.cwd(), filePath);
    try {
        const date = execSync(`git log -1 --format=%cd --date=iso ${fullPath}`)
            .toString()
            .trim();
        return new Date(date).toLocaleDateString("fr-FR");
    } catch (error) {
        console.error("Erreur lors de la récupération de la date :", error);
        return null;
    }
}
