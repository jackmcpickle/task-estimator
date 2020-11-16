
import {
    askEstimateType,
    askForMoreEstimates,
    askHowRisky,
    getEstimates,
} from './src/prompts';
import { writeEstimateToDisk } from './src/writer';
import estimator from './data/estimateData';

const init = async () => {
    const estimateType = await askEstimateType();
    console.log({estimateType});


    const estimateValues = await getEstimates(estimateType)
    console.log({estimateValues});

    const risk = await askHowRisky()
    console.log({risk});

    estimator.add({ ...estimateValues, ...risk });

    const askAgain = await askForMoreEstimates();

    if (askAgain) {
        init();
    } else {
        await writeEstimateToDisk(estimator.get());
        console.table(estimator.get());
        process.exit(0);
    }
}

init();