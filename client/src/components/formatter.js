export const formatDate = (milliseconds) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Descember"];
    var date = new Date(+milliseconds);
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
}
