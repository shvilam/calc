import subprocess
from datetime import datetime, timedelta

def get_git_stats(since_date):
    # Run the git log command with a date filter
    result = subprocess.run(
        ["git", "log", f"--since={since_date}", "--pretty=format:%an", "--numstat"],
        stdout=subprocess.PIPE,
        text=True
    )
    lines = result.stdout.splitlines()
    
    stats = {}
    current_author = None
    
    for line in lines:
        if not line.strip():
            continue
        if "\t" not in line:
            current_author = line.strip()
            stats.setdefault(current_author, {"added": 0, "deleted": 0})
        else:
            parts = line.split("\t")
            added = parts[0] if parts[0].isdigit() else "0"
            deleted = parts[1] if parts[1].isdigit() else "0"
            stats[current_author]["added"] += int(added)
            stats[current_author]["deleted"] += int(deleted)
    
    return stats

# Calculate the date for 3 months ago
three_months_ago = (datetime.now() - timedelta(days=90)).strftime("%Y-%m-%d")

# Get the stats since the calculated date
stats = get_git_stats(three_months_ago)

# Print the results
print(f"Git stats since {three_months_ago}:")
for author, data in stats.items():
    print(f"{author}: Added {data['added']} lines, Deleted {data['deleted']} lines")
