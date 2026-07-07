import glob

files = glob.glob('services/*.html')

search_str = '''              </div>
              <div class="mt-3 p-3 rounded-4" style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3);">'''

insert_str = '''                <a href="saas-development.html" class="list-group-item list-group-item-action bg-transparent text-white border-secondary border-opacity-25 py-2"><i class="bi bi-cloud me-2 text-primary"></i> SaaS Development</a>
                <a href="digital-marketing.html" class="list-group-item list-group-item-action bg-transparent text-white border-secondary border-opacity-25 py-2"><i class="bi bi-megaphone me-2 text-primary"></i> Digital Marketing & SEO</a>
              </div>
              <div class="mt-3 p-3 rounded-4" style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3);">'''

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Check if the missing links are already there
    if 'href="saas-development.html"' in content and f not in ['services\\saas-development.html', 'services/saas-development.html']:
        # They might be in the header, let's check if they are in the glass-card
        # Actually, let's just count occurrences of saas-development.html.
        # If it's 2, it's in header and sidebar. If 1, only in header.
        count = content.count('saas-development.html')
        if count > 1:
            continue
            
    # Or simpler: check if the exact link string is in there
    if '<i class="bi bi-cloud me-2' in content:
        # It has saas-development in the list group
        if f not in ['services\\saas-development.html', 'services/saas-development.html']:
            pass
            
    if search_str in content:
        # Check if the file is one of the two that already have it
        if 'saas-development.html' in f or 'digital-marketing.html' in f:
            continue
            
        new_content = content.replace(search_str, insert_str)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Added missing links to {f}")
