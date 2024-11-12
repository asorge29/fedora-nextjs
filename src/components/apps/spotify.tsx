import Window from "@/components/window";


export default function Spotify() {
  
  return (
    <Window title="Spotify Desktop" app="spotify">
      <iframe style={{borderRadius: '12px', border: '0'}} src="https://open.spotify.com/embed/playlist/5cyrZNqBNuJOiB4shVkdVP?utm_source=generator" width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
    </Window>
  )
}