import ClientAPICall from "../../../../../functions/createClientCall";

/**
 * Reinstalls a server, resetting its configuration while preserving files.
 *
 * @param {Object} options - API call options.
 * @param {string} options.apiKey - The API key for authentication.
 * @param {string} options.panel - The base URL of the Pterodactyl panel.
 * @param {string} options.server_id - The ID of the server to reinstall.
 * @returns {Promise<any>} - API response confirming the reinstallation.
 *
 * @throws {Error} - Throws an error if the API request fails.
 */
export default async function reinstallServer(options: { 
    apiKey: string; 
    panel: string; 
    server_id: string;
}): Promise<any> {
    return ClientAPICall({
        apiKey: options.apiKey,
        panel: options.panel,
        method: "POST",
        endpoint: `servers/${options.server_id}/settings/reinstall`
    });
}
