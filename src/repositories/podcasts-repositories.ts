import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-model"

const pathData = path.join(__dirname, "../repositories/podcasts.json")
const language = "utf-8"

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const data = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(data)

    if (podcastName) {
        jsonFile = jsonFile
            .filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }

    return jsonFile
}