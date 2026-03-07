Add-Type -AssemblyName System.IO.Compression.FileSystem

$zipPath = ".\Alghaith_Website_Content_V2_2026.docx"
try {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
    
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $xmlString = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    $zip.Dispose()

    $matches = [regex]::Matches($xmlString, '<w:t[^>]*>(.*?)</w:t>')
    $output = @()
    foreach ($match in $matches) {
        $text = $match.Groups[1].Value
        if (-not ([string]::IsNullOrWhiteSpace($text))) {
            $output += $text
        }
    }
    
    $output -join "`n" | Out-File -FilePath ".\extracted_content.txt" -Encoding utf8
    Write-Host "Extraction completed."
} catch {
    Write-Error $_.Exception.Message
}
