import os
import glob

def reorder_md_files(dir_path):
    """
    Reorders lines in all .md files in dir_path so that
    frontmatter (--- ... ---) is placed at the very top,
    followed by the first '##' line, and then the rest.
    """
    md_files = glob.glob(os.path.join(dir_path, '*.md'))

    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Clean up trailing newlines
        lines = [line.rstrip('\r\n') for line in lines]

        # Find the index of the line that starts with '## '
        # (Assuming it is exactly the first line or near the top)
        experiment_idx = None
        for i, line in enumerate(lines):
            if line.strip().startswith("## "):
                experiment_idx = i
                break

        if experiment_idx is None:
            # If we never find a line starting with "## ", skip this file
            print(f"[SKIP] No '## ' line in {md_file}")
            continue

        # Find the frontmatter block: lines bounded by '---'
        # We'll look for the first '---', then the second '---'
        frontmatter_start = None
        frontmatter_end = None

        dash_lines = [i for i, line in enumerate(lines) if line.strip() == "---"]
        if len(dash_lines) < 2:
            # Not enough dashes to form a proper frontmatter block
            print(f"[SKIP] No valid frontmatter block in {md_file}")
            continue
        
        frontmatter_start = dash_lines[0]
        frontmatter_end   = dash_lines[1]

        # Extract frontmatter block
        frontmatter_block = lines[frontmatter_start:frontmatter_end + 1]

        # Extract experiment line
        experiment_line = lines[experiment_idx]

        # Construct everything else (excluding frontmatter & experiment line)
        # We'll remove the frontmatter lines and the experiment line from the original
        # then place them in the desired order.
        everything_else = (
            lines[:experiment_idx]
            + lines[experiment_idx+1:frontmatter_start]
            + lines[frontmatter_end+1:]
        )

        # Build the new content:
        # 1) frontmatter (--- ... ---)
        # 2) experiment line (## ...)
        # 3) everything else
        reordered_lines = []
        reordered_lines.extend(frontmatter_block)
        reordered_lines.append("")  # Optional blank line
        reordered_lines.append(experiment_line)
        
        # If the first of everything_else isn't empty, you may want a blank line
        # to keep spacing clean. Adjust as needed.
        # reordered_lines.append("")  # Another optional blank line
        
        reordered_lines.extend(everything_else)

        # Convert list back to a string with newlines
        reordered_text = "\n".join(reordered_lines) + "\n"

        # Overwrite the file with the reordered content
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(reordered_text)

        print(f"[OK] Reordered file: {md_file}")


if __name__ == "__main__":
    # Change this to the path containing your .md files
    directory_with_md_files = "/Users/gagegreg/Documents/github/docs.backyardbrains.com/docs/Retired/Experiments"
    reorder_md_files(directory_with_md_files)
