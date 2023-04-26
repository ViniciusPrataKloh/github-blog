import { differenceInDays, differenceInHours } from "date-fns"


export function formatDateToPassedTimeInDays(dateToFormat: Date): number {
    return differenceInDays(new Date(), new Date(dateToFormat))
}

export function formatDateToPassedTimeInHours(dateToFormat: Date): number{
    return differenceInHours(new Date(), new Date(dateToFormat))
}

export function formatPassedDaysToString(days: number): string{
    let daysInString = "";

    (days > 1 )
        ? daysInString = `Há ${days} dias`
        : daysInString = `Há ${days} dia`;

    return daysInString;
}

export function formatPassedHoursToString(hours: number): string{
    let hoursInString = "";

    (hours > 1 )
        ? hoursInString = `Há ${hours} horas`
        : hoursInString = `Há ${hours} hora`;

    return hoursInString;
}