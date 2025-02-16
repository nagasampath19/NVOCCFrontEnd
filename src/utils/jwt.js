import jwtDecode from "jwt-decode";

export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      return false; // Token is expired
    }

    return true; // Token is valid
  } catch (error) {
    console.error("Invalid token:", error);
    return false; // Token is invalid
  }
};
