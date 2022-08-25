export const TextCleaner = (InputText:string) => {
    let re = /.*AI:\n\n/g;
    InputText=InputText.replace(re, '')
    re = /:|\n/g;
    InputText=InputText.replace(re, '')
    InputText = "AI:" + InputText
    return InputText
}