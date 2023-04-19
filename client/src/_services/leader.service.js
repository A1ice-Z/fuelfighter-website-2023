export default async function getMemberDetails(memberId) {
    const response = await fetch(`backend/join/leader.php?member_id=${memberId}`);
    const data = await response.json();
    return data;
}