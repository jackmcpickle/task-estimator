
import {
    askEstimateType,
    askForMoreEstimates,
    askHowRisky,
    getEstimates,
} from './src/prompts';
import { writeEstimateToDisk } from './src/writer';

const THE_ESTIMATE = [];

const init = async () => {
    const types = await askEstimateType();
    console.log({types});


    const estimateValues = await getEstimates(types)
    console.log({estimateValues});

    const risk = await askHowRisky()
    console.log({risk});

    THE_ESTIMATE.push({ ...estimateValues, ...risk });

    const askAgain = await askForMoreEstimates();
    if (askAgain) {
        init();
    } else {
        await writeEstimateToDisk(THE_ESTIMATE);
        console.table(THE_ESTIMATE);
        process.exit(0);
    }
}

init();