#then run npm run build && \
git add dist -f && \
git commit -m "Adding dist" && \
git push tempdemo main && \
git -c credential.helper= -c core.quotepath=false -c log.showSignature=false push --progress --porcelain tempdemo :gh-pages && \
git subtree push --prefix dist tempdemo gh-pages