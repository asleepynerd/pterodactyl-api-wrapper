import ClientAPICall from "../../../../../functions/createClientCall";

/**
 * Removes a user from a server.
 *
 * @param {Object} options - API call options.
 * @param {string} options.apiKey - The API key for authentication.
 * @param {string} options.panel - The base URL of the Pterodactyl panel.
 * @param {string} options.server_id - The ID of the server.
 * @param {string} options.user_id - The ID of the user to remove.
 * @returns {Promise<any>} - API response confirming user removal.
 *
 * @throws {Error} - Throws an error if the API request fails.
 */
export default async function deleteUser(options: { 
    apiKey: string; 
    panel: string; 
    server_id: string;
    user_id: string;
}): Promise<any> {
    return ClientAPICall({
        apiKey: options.apiKey,
        panel: options.panel,
        method: "DELETE",
        endpoint: `servers/${options.server_id}/users/${options.user_id}`
    });
}
