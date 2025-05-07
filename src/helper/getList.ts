import type { ProgramType } from "../config";
import type { Entry, ListResponse } from "../services/type";

function isSpecificProgramType<T extends ProgramType>(entry: Entry<ProgramType>, programType: ProgramType): entry is Entry<T> {
    return entry.programType === programType;
}

export function getList<T extends ProgramType>(list: ListResponse, programType: T): Entry<T>[] {
    return list.entries.filter(entry => isSpecificProgramType<T>(entry, programType));
}