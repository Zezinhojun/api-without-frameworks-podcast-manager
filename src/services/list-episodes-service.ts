import { PodcastTransferModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repositories"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async () => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast()

    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}