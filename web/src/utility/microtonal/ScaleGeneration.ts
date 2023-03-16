import {Scale, scaleFromCents, scaleFromRatios} from "./Scale";
import {CentNote} from "./notes/CentNote";

export function generateEqualTemperedScale(numberOfNotes: number): Scale {
    let ratios = [];

    for (let i = 0; i < numberOfNotes; i++) {
        ratios.push(`${i + numberOfNotes}/${numberOfNotes}`);
    }

    return scaleFromRatios(ratios, `${numberOfNotes}-note Equal Tempered Scale`);
}

export function frequencyToCents(tuningFrequency: number, otherFrequency: number) {
    return (1200 * Math.log2(otherFrequency / tuningFrequency));
}

export function frequenciesToScaleNote(tuningFrequency: number, notes: Array<number>): Array<CentNote> {
    let scaleNotes: Array<CentNote> = [];

    for (const note of notes) {
        scaleNotes.push(new CentNote(frequencyToCents(tuningFrequency, note)));
    }

    return scaleNotes;
}