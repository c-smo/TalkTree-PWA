use local_ip_address::local_ip;

#[tauri::command]
pub fn get_device_ip() -> Option<String> {
    match local_ip() {
        Ok(ip) => Some(ip.to_string()),
        Err(_) => None,
    }
}
